
        function toggleDescription(card) {
            var paragraph = card.querySelector('p');
            paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
        }