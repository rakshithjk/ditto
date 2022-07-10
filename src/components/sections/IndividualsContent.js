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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: "What's on your plate?",
    paragraph: 'Be aware of what you consume'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <ul>
              <li>Ever faced difficulty in sourcing food products that you consume on a day to day basis?</li>
              <li>Have you felt the need for better quality items, but faced difficulty in sourcing them?</li>
              <li>Have you ever pondered regarding how true the term “Organic” is when buying products labeled so?</li>
            </ul>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                   Procure directly from farmers.. Freedom to buy from a specific area <br/><br/>
                   Choose to buy coffee for Chikamagaluru, Pepper from waynad and experience the authentic and tastes the geo offers
                      </p>
                </div>
               
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                   Be a part of this digital revolution, empower farmers by trading directly through them, removing the role of middlemen

                   <br/><br/>
Every fruit is traceable back to the farm, so farmers can benefit from online payments and a profit-sharing model
                      </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                   Experience true Organic products at the comfort of your home
                   <br/><br/>
With so much tainted and contaminated food around, it’s hard to ensure food safety in what you and your family are eating.
                      </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <SectionHeader data={{paragraph:"Reach out to us to be a part of the Digital revolution"}} className="center-content"/>
    </section>
  );
}

IndividualsContent.propTypes = propTypes;
IndividualsContent.defaultProps = defaultProps;

export default IndividualsContent;