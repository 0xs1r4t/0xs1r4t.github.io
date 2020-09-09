// refresh screen on browser resize
// mains reponsivity

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(true); /* false to get page from cache */
  }, 100);
});