import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion';

const Forecast = ({ data }) => {
	return (
		<>
			<label className='title'>Daily </label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className='daily-item'>
									<img
										src={`icons/${item.weather[0].icon}.png`}
										alt='weather'
										className='icon-small'
									/>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel></AccordionItemPanel>
					</AccordionItem>
				))}
				<AccordionItem></AccordionItem>
			</Accordion>
		</>
	);
};

export default Forecast;