import React from 'react'
import "./TechStack.css";


export default function TechStack() {
    return (
        <div className='techstack' id='techStack'>
            <div className='techstack-heading'>
                <h1>Technical Skills</h1>
                <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>
            </div>
            
            <div className='techstack-container'>
            <div className='techstack-heading2'>
                <h1>Frontend</h1>
            </div>
                <div className='techstack-frontend'>
                    <div>
                      <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt="ok" />
                      <h4>CSS</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_WSdtn3KLnPDYAHhVjp05Jrt_qgsfrLvyjf0ZCsGLCUTQD5It9-pjMbVGwkM9isiZXo&usqp=CAU" alt="ok" />
                       <h4>HTML</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQK9gTb30FwDgp7Ss5lS1yumraT65MmdaR1J2ZLBa5WYjgzafpD8dac4lP-Kp3pWmebY&usqp=CAU" alt="ok" />
                       <h4>JAVASCRIPT</h4>
                    </div>
                    <div>
                       <img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" alt="ok" />
                    <h4>REACT</h4>
                    </div>
                    <div>
                       <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-2_5.png?itok=IlsUnu37" alt="ok" />
                       <h4>GIT</h4>
                    </div>
                    <div>
                       <img src="https://e7.pngegg.com/pngimages/522/1018/png-clipart-purple-atom-redux-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="ok" />
                       <h4>REDUX</h4>
                    </div>
                    <div>
                       <img src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png" alt="ok" />
                       <h4>POSTMAN</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMmDkxQn-Czj1RIByReKqFXlN2SIRDgvuCQ&usqp=CAU" alt="ok" />
                       <h4>BOOTSTRAP</h4>
                    </div>
                    <div>
                       <img src="data:image/png;base64,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" alt="ok" />
                       <h4>MATERIAL UI</h4>
                    </div>
                    <div>
                       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAYFBMVEX///8Wvcr7/v7x+/z4/f0rw88ev8w6x9LC7vHk9/nq+fpMzNa87PC06u7u+vuV4eed4+nc9fdh0tt62eFp1N1Vz9iM3uXQ8vSn5uuZ4ui26u592uHL8POs5+xm1NxCytRjBZUXAAAFL0lEQVR4nO2ca5OrIAyGWwERxVZE0F48/P9/ebS13e22KuiypTN5Pu7sVF6ScEmimw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/CEYsTPPm2LfUTQtrxnC7x6TM5jxQipDCIm3F2JCqFGy4OKDxGDRyoxsX0JM1XyIll1yMvFrFYNxqOS7d49yFpT/G7HFg13KJn33SCeJzpWFjItZVI7ePdpx0gO1k3Gxiqyjdw94hLqajI0nTBOkUSKeOcm4GEW8e9TP4NbBre6oJDT3wo1llP/A5IFtKu0yHZ17FUEpSZb41aBkH1DIC+c4D1PJTq7Q0SnRgSiJiqUB4qwk8hpQtVmnw0GJ8Llc43WOdVWyt5rq9JT707HhX44VE6NUWaqMujqblRKkjcejAKpuKmhVJCJFGO9YfdyXbiuyxdqFNKk8LguDQeLs8HjzQ7V2ih2iZ25bnY648KdjMIgp2FMYRkK7WCWWbOpBO0221KNnnXuDjB1jcVI6nOzjqh5/jpDdL0l/q2+kuxHQ8YsFO7mEfcZHRooT1c/X0ZeMbqDd4SSbWtzRwUUJ0S/da/BR5fGi38bbctpxce4UKNlTsEWiyC4OGhf+dsNuM5zR0Q3ESUknRScMD0OOMEv0LbuUeQx1QdX8rzsq6Rwsq3RzTBLe7quvTJ9Pg2xydbb4L2cl/bAvfP9L6TFCooZbzdISJU9m8nnMwrZp3F9QIsO4tKxW4jPSnVipxOde6MgqJfEhoFzLglTkXccprDpErRbqkKEVIYRjmvumY/J8/xZS7Z5wiU+h2aMHt64pF3IIYwN5orYtal3JjgGtV4+gXFlHCtGh7IMvSYcLxqyMKgnWHFci1qg5B4tpxQONjgdSLs2EFqJ0/QkyerDguqTkycliYqpDkv5RTQ6jHWNMCMFYivDSh0ZI8EbLUhnaY4z6J/ftmf1NZGB2bvfynzLD01UpdcMFWjyFGKXDnPST8ptDHSdKk0NlXrkDLfXndP6gWk8tNsRIHuJp4ieIV3Ru+Seqec4BhwVO7I4WcVYEbRVhn8MNufEHH50ud2Qqrf5O3BLRPaYNcQFLT+73OqLDixQmF91Pq9AO4OkiHR0qrEDZLfCrgcwuMfw34MNiHdstzcNRclzVZhKOklX9SwEpQavbTKyVWFcoFpGv7F+yVxLxxqPt2EOu9rkY9otKzspn3aC4D5tk1b7lSXJsdDX2IsIaJUIZj/ndW6TH5mfB2C4tZa9ElF67M64GeVXCZ5YZtpuSmSNkXW5J603HJr1ECH2dtGROafXJRHSU9G0gHj3rsheqsaQldqo/xafRgaKmL8lpr90Z23iqC9/p5YS4HJkRIS99UjZ9BwsRdK6pze183/noc2saK67lEp8tfkU828S6c6s/mR/pXCwOw5pBuD8dqLJoxkV7tz2FlvtjzXYYo1QkxVd2yadBhLFpKsaOSrrJp1nfUKu+pyt9GmST25Ug3ZW8wONm2C3ulldutKBO+wPj9U5sXSpYrYT4bChzYa0SGUx7huva9Ugw/UubdUpo8u7RfwctfhXG56l3CThf9jIMaULLEUfJkhYmGpyOze0Y60RQqcgvUOPmXpMvJ7yVqHYxCj2EV3i4g/LZFpMBUp2DdKs76Xy3TC+jDLfMeCflcrqKHZtTEsypZBIsmmqs84dksv2YBonNpfOn/8AL/f6BF3L5wMsfNcz8Jhixmre3T+7kn/nJHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCj+Q8DB0QGVraOugAAAABJRU5ErkJggg==" alt="ok" />
                       <h4>TAILWIND</h4>
                    </div>
                    <div>
                       <img src="https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg" alt="ok" />
                       <h4>CHAKRA UI</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgA12maOTY4A_4kASmwSFgAlTg_MCzk8r6w&usqp=CAU" alt="ok" />
                       <h4>NETLIFY</h4>
                    </div>

                    <div>
                       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEX////LODfJLSzglpbKNDP99/fRU1Pwzs7IJCPuyMjTX17LNjXMPDvKMjDXb2789PTwzs3PR0bHHx3HFBLZenrekZDQTEvkoqIlE/svAAABlklEQVR4nO3dyU4DQRBEQbywmsUshv//UzgiIcrKErh7IOJeKT3NcQ59dgYAAAAAQO1yWfaXceHj09WiPJ+nhRfb1ZLs1goVzk6hwvkpVDg/hQrnp1Dh/BQqnJ9ChfNTqHB+ChV+2Rvya+LudIW7i/316e1fisQfLtzepGs/YrNWGFE4gMKQwgEUhhQOoDCkcACFIYUDKAwpHEBhSOEACkMKB1AYUjiAwtBvFd7uit378nQhhavt7lt3f6Kw+oYKFWYUdiksKAwp7FJYUBhS2KWwoDCksEthQWFIYZfCgsKQwi6FBYUhhV0KCwpDCrsUFhSGFHYpLCgMKexSWFAYUtilsKAwpLBLYUFhSGGXwoLCkMIuhQWFIYVdCgsKQwq7FBYUhhR2KSwoDCnsUlhQGFLYpbCgMKSwS2FBYUhh12IKH5qOFRan54fTFa62/SeNisBjuyd8DeljsK1aPbJbHnqzS+H0FCqcn0KF81OocH4KFc5PocL5KVQ4P4UK56fwXxa+Xq0X5SkufNssyyEuBAAAAAD47B0TP5VoSK2pFAAAAABJRU5ErkJggg==" alt="" />
                       <h4>NPM</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgejJN-rCHaZV5fCYU-_CApY-VWTcC3xqqg&usqp=CAU" alt="ok" />
                       <h4>TYPESCRIPT</h4>
                    </div><div>
                       <img src="https://user-images.githubusercontent.com/2730609/49487139-07392080-f7f6-11e8-96b1-e19e8be696c4.png" alt="ok" />
                       <h4>CYPRESS</h4>
                    </div>
                    <div>
                       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAbFBMVEUAAAD///+RkZHV1dX6+vrY2Nh/f3/Jycm2trb8/PzOzs4oKCg0NDSioqL29vY+Pj4wMDCtra1HR0eYmJiHh4fv7+9PT08jIyOSkpI5OTm9vb1aWlrh4eGJiYlMTEzExMRqampiYmIQEBBxcXEBqPAHAAACyElEQVR4nO3bi1riMBCGYQcKCEVQjqKooPd/j1u2W1lLz02fmdTvvYJ/npSMmcS7OwAAAAAAAAAAAAAAAAAAAAAAAAAAAPxuq5V2go7NZtoJujUOgrF2hi6FM5FZqJ2iQ+NApM9LeNhKZHvQztGZifw10c7RlVf551U7SUeGSYFD7STduOwwsWCjnaUL4fcCRkvYx1YxuNYn0zftNO7Nj/8VKMe5dh7n1vLDWjuPaytJ6dup4pgu8KidyK1NkC4w6NU+Mx+m64taRZ/2mYfb+kQetFO5877NKnD7rp3Lmfus+kSetHM5k12fiHYuVz7yCvzQTubGaZFX4OKknc2F5SivvqhVLLXTOZDZIhI9aBW7aVGBstPO11pOi0jca+dra1lcn4jvv8JZWYGe31W8Ff8CxfdTxWPGKSJt+KidsoVx6QKKTD2+q9hXWMBoCffaORsraREJb1vFuVp9ImftpM18FvwR+tPoUztrI4MKO0zMz0F3lRaR8LJVDMrrunrWTlvfIXPQlOfo37V24THwlncHw7BefSK+3RhW7PFXnnX78c1dRBm/ns8UDZryjHw6+tbcYWIe7TO73ElokYU/A6jaO0zsRTt3Zc3q8+euonTQlMeTR2xfjX6BF4sv7exVhJOm9XnyWHbTvD4RDx6x7drU58NdxUu7As23ipsXTXVZfwFVY06Rzfhj2eqDpjzTgXYNRQ4NThFpI8vTi1YtImG4VYQOFjBaQrszxHV5+irMPpZt2eOvjHb7vZMP9GJk80LtuXWL+GbyI3XRIhImW4WjHSZmcAmXte4iymztzRCfXNZn8LHs3G19ItaerLc8Bt4ydjA8Nx405VmYepnQZtCUZ2JpAOV4h4kZ2mdenX+gF4Gdf/Xt4AO9MPMov/Z1dVVWfoWn9aATay8m+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgwx/Olhrqxyx84QAAAABJRU5ErkJggg==" alt="ok" />
                       <h4>VERCEL</h4>
                    </div>

                </div>
                <div className='techstack-heading2'>
                <h1>Backend</h1>
               </div>
                <div className='techstack-backend'>
                    <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Uwiil7q-Oq_EMK41OxZNDc7q5SqEX8pMnA&usqp=CAU" alt="ok" />
                <h4>NODE JS</h4>

                    </div>
                    <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnyFUtltxXuEjXQNZtIkAik-XEOLujbu1bw&usqp=CAU" alt="ok" />
                <h4>MONGO DB</h4>

                    </div>
                    <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Cl7TKrJZnqIcySObGhSToz0G8jAHbfryA&usqp=CAU" alt="ok" />
                <h4>EXPRESS JS</h4>

                    </div>


                </div>
            </div>
            <div className='techstack-heading'>
                <h1>Projects</h1>
                <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>
            </div>

            
        </div>
    )
}
