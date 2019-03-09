import React from 'react';


const Footer =  () => (
    <footer id="footer">
        <div className="footer-inner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="copyright">
                            &copy; {new Date().getFullYear()}.aleku399 . ALL RIGHTS RESERVED
                        </div>
                        <div className="col-sm-6">
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
