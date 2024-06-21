// eslint-disable-next-line import/named
import { IconType } from 'react-icons'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
// BsInstagram, BsFacebook,
interface SocialMedia {
    name: string
    url: string
    icon: IconType
}

const socialMedias: SocialMedia[] = [
    {
        name: 'Github',
        url: 'https://github.com/Daarshan23',
        icon: BsGithub,
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/darshan-jain-developer/',
        icon: BsLinkedin,
    },

    {
        name: 'Instagram',
        url: 'https://www.instagram.com/daarshan.23/',
        icon: BsInstagram,
    },
    {
        name: 'Whatsapp',
        url: 'https://api.whatsapp.com/send?phone=918200014895',
        icon: BsWhatsapp,
    },
]

export default socialMedias
