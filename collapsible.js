var collapsible = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsible.length; i++)
{
    collapsible[i].addEventListener("click", function()
    {
        var isActive = this.classList.contains("active");

        var allCollapsible = document.getElementsByClassName("collapsible");

        for (var j = 0; j < allCollapsible.length; j++)
        {
            var content = allCollapsible[j].nextElementSibling;
            content.style.maxHeight = null;
            allCollapsible[j].classList.remove("active");
        }

        if (!isActive)
        {
            this.classList.add("active");
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}