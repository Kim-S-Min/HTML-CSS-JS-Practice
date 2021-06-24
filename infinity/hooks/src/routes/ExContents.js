import React, { useState, useRef, useCallback } from 'react'

import ExContentsService from '../service/ExContentsService'
import "../css/ExContents.css"

export default function ExContents() {
  const [query] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
      list,
      hasMore,
      loading,
      error
  } = ExContentsService(query, pageNumber)

  const observer = useRef()
  const lastPageElementRef = useCallback(node => {
    if (loading) return 
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node) 
  }, [loading, hasMore])


  return (
    <div className="contents">
      <ul className="contents__ul">
        {list.map((title, index) => {
          if (list.length === index + 1) {
          return <div ref={lastPageElementRef} key={title}>{title}</div>
          } else {
          return (
            <li className="contents__li">
                <div className="contents__div">
                  <div>
                    <img src={title} alt="title"/>
                  </div>                
                  <div className="contents__box">
                    <button className="contents__btn">
                      좋아요
                    </button>
                    <button className="contents__btn">
                      싫어요
                    </button>
                  </div>
                </div>
            </li>
          )}
        })}

        <div>{loading && 'Loading...'}</div>
        <div>{error && 'End...'}</div>  {/* 페이징이 모두 끝나게 되면 Loading과 End가 동시에 출력된다 */}
      </ul>
      <div className="footer">
        2021 Bit-academy-teamProject-1조
      </div>
    </div> 
  )
}