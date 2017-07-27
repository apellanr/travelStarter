import React from 'react';
import Ninja from './imgs/seung.png'
import ATPerez from './imgs/anna.png'
import Apples from './imgs/apples.png';

export default () => {
    return (
        <div>
            <div className="mission">
                <h4>Goal of travelStarter</h4>
                <p>Our goal is to help individuals take a step forward with traveling. In the near future, we would love for people to build their own trips or stumble upon other trips that experienced travelers have embarked on.</p>
                <p>Traveling can help you discover hidden gems in any city. Whether if it is hiking up to the Hollywood Sign in Los Angeles, or dancing all night somewhere in Spain - it's all up to you.</p>
                <p className="text-center">Cheers to your next adventure!</p>
                <p className="text-center"> - travelStarter</p>
            </div>

            <div className="container about">
                <h4 className="text-center">Team GlobeOtters</h4>
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded" src={ATPerez} alt="Generic placeholder image" width={140} height={140}/>
                        <h3>Anna Thomas</h3>
                        <i>Front End Developer</i>
                        <p>Anna has a awesome personality and brings the fire to the team. Her laugh is contagious and emits radiance to any room she is in. Many have mentioned that she can be found at Whole Foods, so be on the lookout for this cool individual!</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded" src={Ninja} alt="Generic placeholder image" width={140} height={140}/>
                        <h3>Alex SJ Lee</h3>
                        <i>Front and Back End Developer</i>
                        <p>It is a rare occasion to come across a 'ninja' in your daily life. Alex has high resilency and always finds a way to solve any problem that comes before him. On a side note, this ninja's weaknesses may be puppies and Soylent?</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded" src={Apples} alt="Generic placeholder image" width={140} height={140}/>
                        <h3>Ryan Apellanes</h3>
                        <i>Front End Developer</i>
                        <p>Ryan was inspired to make this application because of his recent trip to Europe. He loves photography and the outdoors. Fun fact - his all-time favorite ice cream flavor is 'Ube' from Mitchell's in San Francisco, CA. Try it if you haven't had the chance.</p>
                    </div>
                </div>  
            </div>

            <div className="app-note text-center">
                <h4>Note</h4>
                <p>Our application was built for smaller handheld devices. Please direct to any mobile device for the best experience.</p>
                
            </div>
        </div>
    )
}