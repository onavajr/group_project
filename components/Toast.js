import Notify from "./Notify";
const Toast = ({msg, handleShow, bgColor}) => {
    return(
        <div className={'toast show position-fixed text-dark'}
        style={{top: '5px', right: '5px', zIndex: 9, minWidth: '200px'}} >
        {/* data-autohide="true"> */}
            <div className='toast-header text-dark'>
                <strong className="mr-auto text-dark" style={{color: 'red'}}>{msg.title}</strong>
                <button type="button" className="ml-2 mb-1 closetext-light" data-dismiss="toast" style={{outline: 'none', background: 'none'}} onClick={handleShow}>Close</button>
            </div>
            <h6 className="toast-body" style={{color: 'red'}}>
                {msg.msg}
            </h6>
        </div>
    )
}

export default Toast;