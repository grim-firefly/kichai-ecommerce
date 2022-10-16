import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import s from './style.module.css';
import useDropDownHooks from './useDropDownHooks';
const TopBar = () => {
	const [isMyAccount, setIsMyAccount] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const MenuRef = useRef(null);
	const MyAccountRef = useRef(null);
	useDropDownHooks(MenuRef,isMenuOpen, () => setIsMenuOpen(false));
	useDropDownHooks(MyAccountRef,isMyAccount, () => setIsMyAccount(false));
	return (
		<>
			<div className="flex justify-center bg-[#cccccc]">
				<div className={`container px-4 ${s.topbar}`}>
					<div>
						<Link to='/'>Track Order </Link>
						<Link to='/'>FAQ's </Link>
						<Link to='/'>Help </Link>
					</div>
					<div className={`inline-flex`}>

						<div className='relative' ref={MyAccountRef}>
							<div><button className='hover:underline mx-1' onClick={() => setIsMyAccount(!isMyAccount)}>MyAccount</button></div>
							{isMyAccount &&
								<div className={`${s.dropdown}`} >
									<button className='text-left hover:underline' onClick={() => { console.log("hi"); }}> LogIn </button>
									<button className='text-left hover:underline'> Register </button>
								</div>
							}
						</div>
						<div className='relative' ref={MenuRef}>
							<div><button className='hover:underline mx-1' onClick={() => setIsMenuOpen(!isMenuOpen)}>Language</button></div>
							{isMenuOpen &&
								<div className={`${s.dropdown}`} >
									<button className='text-left hover:underline'> EN </button>
									<button className='text-left hover:underline'> BA </button>
									<button className='text-left hover:underline'> US </button>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default TopBar;