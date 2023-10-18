import React from 'react'

type cellProps = {
    winngMessage:string
    onReset: () => void;
  };
const Reset = ({winngMessage ,onReset}: cellProps) => {
    if(!winngMessage ){
        return;
    }
  return (
    <button onClick={onReset} className='reset'>
      play again
    </button>
  )
}

export default Reset

