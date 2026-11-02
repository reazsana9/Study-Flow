import SectionHeader from './Shared/SectionHeader';
import FeaturedCard from './Shared/FeaturedCard';
import { RxQuestionMarkCircled } from 'react-icons/rx';
import { IoIosTrendingDown } from 'react-icons/io';
import { GoStack } from 'react-icons/go';

const Studying = () => {
    return (
        <section className="container mx-auto text-center py-18.75 space-y-10">

            <SectionHeader title="Studying without a system is exhausting" subTitle="You're not lacking discipline. You're lacking a place where your goals turn into today's tasks." />

            <div className="grid grid-cols-3 gap-4">
                <FeaturedCard icon={<RxQuestionMarkCircled className="mx-auto text-[#0e7c66] text-2xl" />} title="Goals stay vague" description="Get better at math doesn't tell you what to open your laptop and do this afternoon." />
                <FeaturedCard icon={<IoIosTrendingDown className="mx-auto text-[#0e7c66] text-2xl" />} title="Motivation fades fast" description="Without something to point at, it's hard to tell if this week actually went anywhere." />
                <FeaturedCard icon={<GoStack className="mx-auto text-[#0e7c66] text-2xl" />} title="Plans live everywhere" description="A to-do app, a notes app, a calendar - and none of them talk to each other." />

            </div>
        </section>
    );
};

export default Studying;