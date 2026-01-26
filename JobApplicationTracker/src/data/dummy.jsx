import {FaSuitcase} from 'react-icons/fa';
import { MdOutlineTimer } from 'react-icons/md';
import {LuCircleCheckBig} from 'react-icons/lu';
import { MdOutlineCancel } from 'react-icons/md';


export const statusCard = [
{
    id: 1,
    title: 'Total Applied',
    count: 24,
    icon: <FaSuitcase />,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
},
{
    id: 2,
    title: 'Interviews',
    count: 8,
    icon: <MdOutlineTimer />,
    iconBgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
},
{
    id: 3,
    title: 'Offers',
    count: 3,
    icon: <LuCircleCheckBig />,
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-500',
},
{
    id: 4,
    title: 'Rejected',
    count: 5,
    icon: <MdOutlineCancel />,
    iconBgColor: 'bg-red-100',
    iconColor: 'text-red-600',
},
]