import { useEffect, useState } from 'react'
import axios from 'axios'


export default function useBookSearch(query, pageNumber) {
    useEffect(() => {
        axios ({
            method: 'GET',
            url: '',
            params: { q: query, page: pageNumber }
        }).then(res => {
            console.log(res.data)
        })
    }, [query, pageNumber])
    return null
}
