import * as d3 from 'd3'
import {Component} from 'react'
import {render} from 'react-dom'

const Canvas = ({children}) =>
    <svg height="200" width="500">
        {children}
    </svg>
    
const TimelineDot = ({position, txt}) =>
    <g transform={`translate(${position},0)`}>
        <circle cy={160} r={5} style={{fill: 'blue'}} />
        <text y={115} x={-95} transform="rotate(-45)" style={{fontSize: '10px'}}>{txt}</text>
    </g>

class Timeline extends Component {
    constructor({data=[]}) {
        console.log("D3Timeline::constructor")
        const times = d3.extent(data.map(d=>d.year))
        const range = [50, 450]
        super({data})
        this.scale = d3.scaleTime().domain(times).range(range)
        this.state = {
            data,
            times,
            range
        }
    }
    
    componentDidMount() {
        /*
        console.log("D3Timeline::componentDidMount")
        let group
        const {data, times, range} = this.state
        const {target} = this.refs
        
        d3.select(target)
            .append('svg')
            .attr('height', 200)
            .attr('width', 500)
            
        group = d3.select(target.children[0])
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr(
                'transform',
                (d, i) => 'translate(' + this.scale(d.year) + ', 0)'
            )
        
        group.append('circle') 
            .attr('cy', 160)
            .attr('r', 5)
            .style('fill', 'blue')
        
        group.append('text')
            .text(d => d.year + " - " + d.event)
            .style('font-size', 10)
            .attr('y', 115)
            .attr('x', -95)
            .attr('transform', 'rotate(-45)')
        */
    }
    
    render() {
        console.log("D3Timeline::render")
        const {data} = this.state
        const {scale} = this
        return (
            <div className="timeline">
                <h1>{this.props.name} Timeline</h1>
                <Canvas>
                    {data.map((d,i) =>
                        <TimelineDot key={i} position={scale(d.year)}
                            txt={`${d.year} - ${d.event}`}
                        />
                    )}
                </Canvas>
            </div>
        )
    }
}

export default Timeline