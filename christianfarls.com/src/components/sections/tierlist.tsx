import {Table, TableBody, TableCaption, TableCell, TableRow} from '@/components/ui/table';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import TIERS from "@/data/skills";

export default function TierList() {

    // Get the tier color given the title
    function getBackgroundColor(title: string) {
        switch (title) {
            case 'goated':
                return 'bg-red-500';
            case 'been there, done that':
                return 'bg-orange-500';
            case 'mid':
                return 'bg-green-500';
            case 'can carry a convo':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    }

    const tiers = TIERS;

    return (
        <Table>
            <TableBody>
                {tiers.map((tier) => (
                    <TableRow key={tier.tier}>
                        <TableCell
                            className={`border-2 border-black ${getBackgroundColor(tier.tier)} text-center w-1/4 text-xs`}>
                            {tier.tier}
                        </TableCell>
                        <TableCell className="flex-grow border-2 border-black dark:bg-gray-300 bg-gray-400">
                            <div className="flex flex-wrap gap-5">
                                {tier.skills.map((skill, id) => {
                                    return (
                                        <TooltipProvider key={id}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <skill.icon className="h-8 w-8" title=""/>
                                                </TooltipTrigger>
                                                <TooltipContent>{skill.skill}</TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )
                                })}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableCaption>*tier indicates proficiency level</TableCaption>
        </Table>
    )
}
