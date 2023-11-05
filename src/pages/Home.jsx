import React, { useEffect, useState } from 'react'
import SiteInfoTop from '../components/SiteInfoTop/SiteInfoTop'
import About from '../components/About/About'
import NewProdBlock from '../components/NewProdBlock/NewProdBlock'
import PopularProd from '../components/PopularProd/PopularProd'
import SingUp from '../components/SingUp/SingUp'
import GetInTouch from '../components/GetInTouch/GetInTouch'


const Home = () => {
	return (
		<React.Fragment>
			<SiteInfoTop />
			<About />
			<NewProdBlock />
			<PopularProd />
			<SingUp />
			<GetInTouch />
		</React.Fragment>
	)
}

export default Home
