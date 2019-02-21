import React, { PureComponent } from 'react';

export interface IProps {
  month: void|number,
  year: void|number,
  lang: string,
  calendarHeaderFormat?: string,
  hideNavigation?: boolean,
  onNext: () => any,
  onPrev: () => any,
  onValueClick: () => any,
}

class Head extends PureComponent<IProps> {
  selectedValue(): string|number {
    const { month, year } = this.props;

    if (typeof year != 'number') {
      return '';
    } else if (typeof month != 'number') {
      return year;
    } else {
      if (this.props.calendarHeaderFormat && this.props.calendarHeaderFormat.toLowerCase() === 'yyyy'){
        return year;
      }else{
        const monthVal = month < 10 ? '0' + month : month;
        if (this.props.lang == "ja") {
          return year + '/' + monthVal;
        }
        return monthVal + '/' + year;
      }
    }
  };

  render(): JSX.Element {
    return (
      <div className="section_mp group_mp">
        {!this.props.hideNavigation ?
          <div className="col_mp span_1_of_3_mp arrows_mp"
          onClick={this.props.onPrev}>&lt;</div>
        : <div className="col_mp span_1_of_3_mp arrows_mp" style={{"visibility": "hidden"}}>&nbsp;</div> }

        <div className="col_mp span_1_of_3_mp selected_date_mp"
          onClick={this.props.onValueClick}
        >
          {this.selectedValue()}
        </div>

        {!this.props.hideNavigation ?
          <div className="col_mp span_1_of_3_mp arrows_mp"
            onClick={this.props.onNext}>&gt;</div>
        : <div className="col_mp span_1_of_3_mp arrows_mp" style={{"visibility": "hidden"}}>&nbsp;</div> }          
      </div>
    )
  }
}

export default Head;
