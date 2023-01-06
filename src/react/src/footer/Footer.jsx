import * as React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="logo-container">
                <PsychologyIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1, fontSize: 45}}/>
            </div>
            <div className="button-container">
                <button>
                    <span>Legal Notice</span>
                </button>
                <button>
                    <span>Terms and Conditions</span>
                </button>
                <button>
                    <span>Imprint</span>
                </button>
            </div>
            <span className="copyright">Copyright &copy; 2022-2023 Memorizer Inc.</span>
        </div>
    );
}

export default Footer;