import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'

const Index = () => {
	const history = useNavigate();

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '90vh'
			}}
		>
			<div>
				<h1>🚧 404 🚧</h1>
				<h2>요청하신 페이지가 존재하지 않습니다.</h2>
				<p>이 페이지가 이동되었거나, 존재하지 않는 것 같아요.</p>
				<button as={Link} onClick={()=>{history(-1)}} variant="info"><FontAwesomeIcon icon={faArrowLeft} /> 이전 페이지로 이동하기</button> <Link to="/"><button as={Link} variant="primary"><FontAwesomeIcon icon={faHouse} /> 메인 페이지로 이동하기</button></Link>
			</div>
		</div>
	);
};

export default Index;