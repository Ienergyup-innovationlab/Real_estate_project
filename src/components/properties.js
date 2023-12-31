import React from 'react';
import CardItem from './cardItem';
import './properties.css';
import Header from "./Header";
import Footer from "./Footer";

function Properties() {
  return (
    <>
    <Header />
    <div className='cards'>
      <h1 className="heading">Product Categories</h1> 
      <p className='tpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin quis auctor sit consectetur dolor nisi volutpat elit. Sed turpis convallis velit pulvinar lectus nec habitant.</p>
      <h1 className="heading">Properties For Rent</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__items'>
                <CardItem 
                  src="images/4.jpg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                  label="Rent" 
                  path='/propertyview'
                />
              
                <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
                />
                <CardItem 
                src="images/6.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
                />
            </div>
            <div className='cards__items'>
              <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
              />
              <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
              />
              <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
              />
              <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
              />
            </div>
        </div>
      </div>
      <h1 className="heading">Properties For Sale</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__items'>
                <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/6.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
            </div>
            <div className='cards__items'>
              <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
              />
              <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
              />
              <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
              />
              <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
              />
            </div>
        </div>
      </div>
      <h1 className="heading">Properties For Joint Ventures</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__items'>
                <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/6.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
            </div>
        </div>
      </div>
      <h1 className="heading">Properties For Lease</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__items'>
                <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
                <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
                <CardItem 
                src="images/6.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
            </div>
        </div>
      </div>
      <h1 className="heading">Land For Rent</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__items'>
                <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
                />
                <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
                />
                <CardItem 
                src="images/6.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Rent" 
                path='/propertyview'
                />
            </div>
        </div>
      </div>
      <h1 className="heading">Land For Lease</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__items'>
                <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
                <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
                <CardItem 
                src="images/6.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Lease" 
                path='/propertyview'
                />
            </div>
        </div>
      </div>
      <h1 className="heading">Land For Sale</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__items'>
                <CardItem 
                src="images/4.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/5.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/6.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin"
                label="Sale" 
                path='/propertyview'
                />
            </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Properties;
