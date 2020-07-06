import React from 'react';

const Card=(props)=>{ 	{/*OR const Card=({ name , email , id})=>{ return ......}*/}
	const { name , email , id} = props;
	return(
		<div className='tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5'>
			{/*<img src='https://robohash.org/test?100x100' alt='robots'/>*/}
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;