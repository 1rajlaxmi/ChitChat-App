import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import Search from "./Search";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<Search />
			<div className='divider px-3'></div>
			<Conversations />
			{ <LogoutButton /> }
		</div>
	);
};
export default Sidebar;