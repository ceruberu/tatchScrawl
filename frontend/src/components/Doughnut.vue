<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    console.log('DATA', this.data);
    const { photo, video, status, link } = this.data;
    this.renderChart({
      labels: ['Photo', 'Video', 'Status', 'Link'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [photo, video, status, link]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>