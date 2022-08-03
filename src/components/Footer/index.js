import './footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <Link className="link" to="">
                Sobre
            </Link>
            <Link className="link" to="">
               Sla
            </Link>   
        </footer>
    )
}

export default Footer;