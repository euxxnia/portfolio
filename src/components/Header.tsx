import React, { useState } from "react";

const Header = () => {
    return (
        <header id="header" role="heading">
            <div className="header__inner">
                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/works">Works</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;