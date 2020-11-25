import { useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { FaBellSlash } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Notifications = ({ showNotifications, setShowNotifications }) => {
	const notificationsContainerRef = useRef(null);

	useEffect(() => {
		if (
			notificationsContainerRef &&
			notificationsContainerRef.current &&
			notificationsContainerRef.current.classList
		) {
			if (showNotifications) {
				notificationsContainerRef.current.classList.add(
					"notifications__container--active"
				);
			} else {
				notificationsContainerRef.current.classList.remove(
					"notifications__container--active"
				);
			}
		}
	}, [showNotifications]);

	return (
		<div className="notifications__container" ref={notificationsContainerRef}>
			<div className="notifications__top-nav">
				<p>Notifications</p>
				<IconContext.Provider
					value={{ size: "1.5rem" }}
					className="notifications__close--container">
					<div className="notifications__close">
						<div className="notifications__close--active">
							<GrClose
								onClick={() => {
									setTimeout(() => {
                    setShowNotifications(false);
                    
									}, 150);
								}}
							/>
						</div>
					</div>
				</IconContext.Provider>
			</div>
			<div className="notifications__content">
				<IconContext.Provider value={{ size: "3.5rem", color: "#ff8a2b79" }}>
					<FaBellSlash />
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default Notifications;
