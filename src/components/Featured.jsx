import SectionHeader from './Shared/SectionHeader';
import FeaturedCard from './Shared/FeaturedCard';
import { RiFocus2Line, RiListCheck3 } from 'react-icons/ri';
import { IoBookOutline } from 'react-icons/io5';
import { LuChartColumn, LuSparkles, LuTimer } from 'react-icons/lu';

const Featured = () => {
    return (
        <div className="container mx-auto py-18.75 space-y-10">
            <SectionHeader title={"Everything a study session needs"} subTitle={"Nothing you don't need, nothing you have to configure for an hour first."} />

            <div className="grid grid-cols-3 gap-4">

                <FeaturedCard
                    icon={<RiListCheck3 className="mx-auto text-[#0e7c66] text-2xl" />} title="Daily task breakdown" description="Every goal splits into small tasks you can finish in one sitting."
                />

                <FeaturedCard
                    icon={<RiFocus2Line className="mx-auto text-[#0e7c66] text-2xl" />} title="Goal tracking" description="See exactly how many tasks stand between you and each goal."
                />

                <FeaturedCard
                    icon={<IoBookOutline className="mx-auto text-[#0e7c66] text-2xl" />} title="Subject insights" description="Color-coded subjects show where your time is actually going."
                />

                <FeaturedCard
                    icon={<LuTimer className="mx-auto text-[#0e7c66] text-2xl" />} title="Focus timer" description="A built-in Pomodoro timer to protect a block of real study time."
                />
                <FeaturedCard
                    icon={<LuChartColumn className="mx-auto text-[#0e7c66] text-2xl" />} title="Visual progress" description="Streaks, charts and progress bars that move when you do the work."
                />
                <FeaturedCard
                    icon={<LuSparkles className="mx-auto text-[#0e7c66] text-2xl" />} title="AI day planning" description="One click suggests a simple schedule for today's tasks."
                />

            </div>
        </div>
    );
};

export default Featured;