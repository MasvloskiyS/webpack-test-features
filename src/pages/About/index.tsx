import avatar from '@/assets/avatar.jpg'
import User from '@/assets/user.svg'

const About = () => {
    return <div>
        <h2>About me</h2>
        <h3>Platform: {__PLATFORM__}</h3>
        <img width={222} src={avatar} />
        <User width={250} height={250} fill='red' />
    </div>
}

export default About