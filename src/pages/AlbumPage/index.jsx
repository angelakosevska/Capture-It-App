
import "./style.css";
import CaptureItAnimation from "../../components/Animation/CaptureItAnimation/index.jsx";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import  Like  from "../../components/Like/index.jsx";


export function Album() {
  return (
    <>
    
        <body>
          <main>
            <div className="BreadC-position">
              <Breadcrumbs />
            </div>
            <div className="album-grid">
            
              <Like />

             
            </div>
            
            <CaptureItAnimation/>
       
          </main>
        </body>
      
    </>
  );
}
export default Album;
//od slikite se ukluchva slikite so komentarite

