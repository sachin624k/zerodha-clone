import React from 'react';

function LeftSection({ imageUrl, imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, }) { // inside ({props})
    return (
        <div className='container' style={{marginTop: "90px"}}>
            <div className='row'>
                <div className='col-6' style={{paddingLeft: "140px"}}>
                    <img src={imageUrl} style={{width: "550px"}} />
                    <img src={imageURL} style={{width: "450px", paddingLeft: "150px"}} />
                </div>
                <div className='col-6 mt-5' style={{paddingLeft: "200px", paddingRight: "110px"}}>
                    <h1 style={{fontSize: "25px", color: "#424242"}}>{productName}</h1>
                    <p style={{lineHeight: "33px", fontSize: "17px", color: "#424242"}}>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none", fontSize: "18px"}}>Try Demo <i class="fa fa-long-arrow-right" style={{fontSize: "14px", color: "#387ed1"}} aria-hidden="true"></i></a>
                        <a href={learnMore} style={{textDecoration: "none", marginLeft: "50px", fontSize: "18px"}}>Learn More <i class="fa fa-long-arrow-right" style={{fontSize: "14px", color: "#387ed1"}} aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore} style={{marginLeft: "50px"}}><img src='media/images/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;