import ShowerIcon from "~icons/fluent/showerhead-20-filled";
import HosingIcon from "~icons/fluent/home-person-24-filled";
import TicketIcon from "~icons/fluent/ticket-diagonal-16-filled";

import { Tag } from "$lib/types/enums";

export const getIcon = (tag: Tag) => {
	switch (tag) {
		case Tag.Showers:
			return ShowerIcon;
		case Tag.Housing:
			return HosingIcon;
		case Tag.Vouchers:
			return TicketIcon;
	}
};
