import React from 'react'
import { Card } from './Card'

export const Row = ({ location, data }) => {
    return (
        <section className={`row ${location}`}>
            {data.map(data => {
                return (
                    <Card key={data[0]} position={data[0]} type={data[1]} color={data[2]} icon={data[3]} name={data[4]} tag={data[5]} value={data[6]} />
                );
            })}
        </section>
    )
}
