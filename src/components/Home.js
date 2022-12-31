import React from 'react'
import Machines from './Machines'
import { useContext } from 'react'
import machineContext from '../context/machines/machineContext'
import Footer from './Footer';
export default function Home() {
  const a = useContext(machineContext);
  return (
    <>

      <div className="row">
                {a && a.map((ele) => {
                    return <div className="col-md-4" key={ele.url}>
                        <Machines img={ele.img} description={ele.description} title={ele.title} url={ele.url} />
                    </div>
                })}
      </div>
      <Footer/>
    </>
  )
}
