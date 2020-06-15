import React from "react";
import rhombus from '../images/rhombus.svg'
import search from '../images/search.svg'
import plus from '../images/plusWhite.svg'
import help from '../images/help.svg'
import user from '../images/user.svg'

function PrimaryLeftSidebar() {
    return (
        <div className="col-1-w h-100 bg-color-primary">
            <div className="text-center mt-4 mb-5"><a href="/#"><img width='42px' height='42px' src={rhombus}
                                                                     alt="Logo"/></a></div>
            <div className="text-center mt-5"><a href="/#"><img width='28px' height='28px' src={search}
                                                                alt="Search"/></a></div>
            <div className="text-center mt-4"><a href="/#"><img width='42px' height='42px' src={plus} alt="Add"/></a>
            </div>
            <div className="text-center mt-4 help-wrapper w-100 mb-4"><a href="/#"><img width='28px' height='28px'
                                                                                        src={help} alt="Help"/></a>
            </div>
            <div className="text-center mt-4 profile-wrapper w-100 mb-4"><a href="/#"><img width='42px' height='42px'
                                                                                           src={user} alt="User"/></a>
            </div>
        </div>
    );
};

export default PrimaryLeftSidebar;