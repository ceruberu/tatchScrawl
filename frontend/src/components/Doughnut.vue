<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    const { photo, video, status, link, event } = this.data;
    this.renderChart({
      labels: ['Photo', 'Video', 'Status', 'Link', 'Event'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [photo.count, video.count, status.count, link.count, event.count]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>