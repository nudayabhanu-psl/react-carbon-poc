import React from "react";
import {
    Accordion,
    AccordionItem,
    Checkbox,
} from "carbon-components-react";

import "./Sidebar.scss"

interface SidebarProps {
    appliedFilter: string[];
    onChange: Function
}

export const SideBar: React.FC<SidebarProps> = ({ appliedFilter, onChange }) => {

    return <div className="SideBarContainer">
        <Accordion>
            <AccordionItem title="Name">
                <Checkbox labelText="Google" checked={appliedFilter.includes('Google')} id={`1-checked-1`} onChange={() => onChange('Google')} />
                <Checkbox labelText="Ibm" checked={appliedFilter.includes('Ibm')} id={`1-checked-2`} onChange={() => onChange('Ibm')} />
                <Checkbox labelText="Facebook" checked={appliedFilter.includes('Facebook')} id={`1-checked-3`} onChange={() => onChange('Facebook')} />
            </AccordionItem>
        </Accordion>
    </div>;

};
