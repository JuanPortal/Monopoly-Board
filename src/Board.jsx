import React from 'react'
import { Row } from './Row'
import { data } from './data'

export const Board = () => {    
    return (
        <main>
            {/* <Row location="north" data={data.slice(0, 10)} /> */}
            {/* <Row location="east" data={data.slice(10, 20)} /> */}
            <Row location="south" data={data.slice(20, 30)} />
            <Row location="west" data={data.slice(30, 40)} />
        </main>
  )
}
