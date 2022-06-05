import React,{useState} from 'react'
import Modal from './rates.js'

const Inventory = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Inventory</h1>
            <button onClick={() => setShow((s) => !s)} class="b1">Rates</button>
            <a  class="b1" href="/updaterestrictions"><center>update Restrictions</center></a>
            <div style={{ display: show ? "none" : "block" }} class="modal-upinv">
        
    <Modal />
    
    </div>
        </div>
    )
}

export default Inventory