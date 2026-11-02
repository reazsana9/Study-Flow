import SectionHeader from './Shared/SectionHeader';

const FAQ = () => {
    return <section className="container mx-auto space-y-8 py-8">
        <SectionHeader title={"Frequently asked questions"} />

        <div className="space-y-4 max-w-175 mx-auto">
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">Do I need to create an account to try it?</div>
                <div className="collapse-content text-sm">You can log in with any email to try the app - it's a demo login, no real password check, no verification email.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Where is my data stored?</div>
                <div className="collapse-content text-sm">Everything lives in your browser's local storage. Nothing is sent to a server, so it stays on this device.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Can I use StudyFlow for more than one subject?</div>
                <div className="collapse-content text-sm">Yes - add as many subjects as you're studying, each with its own color and completion tracking.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">What does the AI day planner actually do?</div>
                <div className="collapse-content text-sm">It suggests a simple schedule for your open tasks with one click, so you're not staring at a blank plan.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Is there a mobile version?</div>
                <div className="collapse-content text-sm">StudyFlow is a responsive web app - it works on your phone's browser down to a 375px-wide screen.</div>
            </div>
        </div>


    </section>

};

export default FAQ;