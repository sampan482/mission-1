

  import { ToastContainer, toast } from 'react-toastify';
  
  function TToast(){
    const notify = () => toast("Wow so easy")

    return (
      <div>
        <button className='bg-blue-200  text-amber-600 text-center rounded-lg' onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
export default TToast;