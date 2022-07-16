import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const IndividualsContent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );



  const sectionHeader = [{
    title: "Our Vision",
    paragraph: "EASY MANDI's vision is to become the largest agricultural fair-trade platform,connecting farmers to industrial all around the world."
  },
  {paragraph:"We aim drive agricultural transactions through our digital platform in combination with our service partnership network. EASY MANDI would accommodate online payments between buyer and seller, product quality check options, and end-to-end logistic services."},
{title: 'HAPPY FARMERS', paragraph: '“Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.” – Thomas Jefferson'}
];

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {sectionHeader.map(section => <SectionHeader data={section} className="center-content" containerSize="container-xl"/>)}
         
        </div>
      </div>
      <SectionHeader data={{paragraph:"Reach out to us to be a part of the Digital revolution"}} className="center-content"/>
      <ul>

      </ul>
    </section>
  );
}

IndividualsContent.propTypes = propTypes;
IndividualsContent.defaultProps = defaultProps;

export default IndividualsContent;