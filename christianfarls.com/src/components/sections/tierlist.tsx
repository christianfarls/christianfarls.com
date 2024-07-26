import {Table, TableBody, TableCell, TableRow} from '@/components/ui/table';

const tiers = [
    {
        title: 'Goated',
        skills: ['Paid', 'there'],
    },
    {
        title: 'Been there, done that',
        skills: ['Paid', 'there'],
    },
    {
        title: 'Mid',
        skills: ['Paid', 'there'],
    },
    {
        title: 'Can carry a convo',
        skills: ['Paid', 'there'],
    },
];

export default function TierList() {

    // Get the tier color given the title
    function getBackgroundColor(title: string) {
        switch (title) {
            case 'Goated':
                return 'bg-red-500';
            case 'Been there, done that':
                return 'bg-orange-500 text-xs';
            case 'Mid':
                return 'bg-green-500';
            case 'Can carry a convo':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    }

    return (
        <Table>
            <TableBody>
                {tiers.map((tier) => (
                    <TableRow key={tier.title}>
                        <TableCell
                            className={`border-2 border-black ${getBackgroundColor(tier.title)} text-center`}>
                            {tier.title}
                        </TableCell>
                        <TableCell className="w-full flex-grow border-2 border-black dark:bg-gray-600 bg-gray-100">
                            {tier.skills.join(' ')}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
