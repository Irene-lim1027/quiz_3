import React from 'react';

const AuctionNewForm = (props) => {
  const { onSubmit } = props;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      description: formData.get('description'),
      end_date: formData.get('end_date'),
      reserve_price: formData.get('reserve_price')
    };
    onSubmit(params);
    event.currentTarget.reset();
  }

  return(
    <form className='auction-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <br />
        <input name='title' id='title' />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <br />
        <textarea name='description' is='description' cols='60' rows='5'/>
      </div>
      <div>
        <label htmlFor='end_date'>Ends at</label>
        <br />
        <input type='date' name='end_date' id='end_date' />
      </div>
      <div>
        <label htmlFor='reserve_price'>Reserve Price</label>
        <br />
        <textarea type='number' name='reserve_price' id='reserve_price' />
      </div>
      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
};

export default AuctionNewForm;