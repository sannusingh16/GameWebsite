import { AiFillGithub,AiOutlineLinkedin } from "react-icons/ai";

const FooterBar = () => {
    return ( 
        <footer>
            <div className="text_footer">
               <p> &copy; 2022 sannusingh</p>
              <a href="https://github.com/sannusingh16" target="_blank" rel="noreferrer"><AiFillGithub /></a> 
              <span><a href="https://www.linkedin.com/in/sannu-singh-2625ab192/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a></span>
            </div>
        </footer>
     );
}
 
export default FooterBar;