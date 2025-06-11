import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-blue-100 text-blue-800 text-black p-4 rounded-lg mb-5'>
            <div>
                <h3 className='text-2xl font-medium '>Knowledge Cafe</h3>
            </div>
            <div className=''>
                <img className='border-solid border-2 border-stone-950 rounded-full p-1' src={Profile} alt="" />
            </div>
        </div>
    );
};



export default Header;