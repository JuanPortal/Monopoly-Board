import React from 'react'
import { Card } from './Card'

export const Row = ({ location, data }) => {
    return (
        <section className={`row ${location}`}>
            {data.map(data => {
                return (
                    <Card key={data[0]} position={data[0]} type={data[1]} color={data[2]} name={data[3]} tag={data[4]} value={data[5]} />
                );
            })}
        </section>
    )
}
