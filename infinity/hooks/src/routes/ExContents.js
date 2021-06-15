import React, { useState, useRef, useCallback } from 'react'
import ExContentsService from '../service/ExContentsService'

export default function ExContents() {
  const [query, setQuery] = useState('')
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

  function handleList() {
    setQuery();
    setPageNumber(1);
  }

  return (
    <>
        {list.map((title, index) => {
          if (list.length === index + 1) {
          return <div ref={lastPageElementRef} key={title}>{title}</div>
          } else {
          return <div key={title}>{title}</div>
          }
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error...'}</div>
         
    </> 
  )
}