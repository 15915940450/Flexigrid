/*
 * Flexigrid Full Width
 *
 * Copyright (c) 2011 Paulo P. Marinas (www.flexigrid.info)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.

name: fl_fw
purpose: makes flexigrid use percentage width for columns making use of the full width of the grid
requirement: none
when to load: after core
*/

(function( $ ){

fl_mod['fl_fw'] = {

	//layouts
	fl_view_fullwidth: function () 
		{ 
		$(this).addClass('fl-grid-fw');
		$(this).append('<div class="fl-grid-inner"><div class="fl-hbdiv">' + this.fl_fpane() + '</div></div>'); 
		}

	//events
	,fl_fw_fixwidth: function ()
		{
		
		if (this.viewtype=='fullwidth')
		{
		
		var w2 = $('.fl-bdiv .fl-table',this).outerWidth();
		
		$('.fl-hdiv .fl-hdiv-inner',this).width(w2+2);
		}
		
		}
	,colresize_fullwidth: function ()
		{
		
		if (this.viewtype=='fullwidth')
			{
			var start = this.mouse_state_start;
			var end = this.mouse_state_end;
			var col = $('.fl-th-'+this.colTarget,this);
			
			
			//if (!s_col) return true;
			
			var w = col.width();
			
			var diff = end.pageX - start.pageX;
			
			var tw = $(this).width();
			
			var df = Math.floor((diff/tw) * 100);

			var s_col = col.siblings().get(0);
			
			var s_target = $(s_col).prop('column_name');
			
			var cm = this.colModel[this.colTarget];
			var s_cm = this.colModel[s_target];
						
			var ow = parseInt(cm.width);
			var s_ow = parseInt(s_cm.width);

			var s_pw = s_ow - df;
			var pw = ow + df;
			
			cm.width = pw;
			s_cm.width = s_pw;

			console.log(s_pw + ' ' + pw);

			col.width(pw+'%');
			$(s_col).width(s_pw+'%')
			
			$('.fl-td-'+this.colTarget+':first',this).width(pw+'%');
			$('.fl-td-'+s_target+':first',this).width(s_pw+'%');
			
			}
		
		}	
}

})( jQuery );
