import { Github, Linkedin, TwitterIcon, Youtube } from "lucide-react";
import Link from "next/link";

const socials = [
    {icon: <Github/>, path: 'https://github.com/Nilton667'},
    {icon: <Linkedin/>, path: 'https://www.linkedin.com/in/nilton-manuel-b70b24187'},
    {icon: <TwitterIcon/>, path: 'https://x.com/nilton_domingos'},
    {icon: <Youtube/>, path: 'https://www.youtube.com/@rubro6122'}
]

export default function Socials({containerStyle, iconStyle}:{containerStyle: string, iconStyle: string}) {
    return (
        <div className={containerStyle}>
            {socials.map((social, i)=>{
                return <Link 
                target="_Blank"
                key={i} 
                className={iconStyle}
                href={social.path}>{social.icon}</Link> 
            })}
        </div>
    );
}