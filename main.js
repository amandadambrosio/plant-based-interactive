$("body").on("change", "input[type='checkbox']", function (e) { // when checkbox is clicked, the following functtion will fire//
	let hp_total = 0, // letting each total start at 0 //
		jh_total = 0,
		sh_total = 0;

	$("input[type='checkbox']").each(function () {
		const $this_checkbox = $(this),
			$this_row = $this_checkbox.closest("tr"), //when input is checked, find the closest row//
			$this_hp = $this_row.find(".hp"), //within this row, find anything with the class "hp"//
			$this_jh = $this_row.find(".jh"), //repeat//
			$this_sh = $this_row.find(".sh"); //repeat//


		if ($this_checkbox.prop("checked")) { // when the checkbox is checked, add the active class to display values //
			console.log("checked")
			$this_hp.addClass("active");
			$this_jh.addClass("active");
			$this_sh.addClass("active");

			let hp_val = parseFloat($this_hp.text()), // grab the text from that cell and make it a number//
				jh_val = parseFloat($this_jh.text()),
				sh_val = parseFloat($this_sh.text());


			hp_total = hp_total + hp_val, // take the text that we just converted to a number and add to the "total" bank, defined at the top//
				jh_total = jh_total + jh_val,
				sh_total = sh_total + sh_val;

			$(".hp_total").find("span").text(hp_total.toFixed(2)); // find the span defined by "hp_total" class and display the added values in that span //
			$(".jh_total").find("span").text(jh_total.toFixed(2));
			$(".sh_total").find("span").text(sh_total.toFixed(2));




		} else {
			$this_row.find(".hp").removeClass("active");
			$this_row.find(".jh").removeClass("active");
			$this_row.find(".sh").removeClass("active");
		}



	});

	$("body").on("click", ".restart-btn", function (e) {
		e.preventDefault();


		$(".hp").removeClass('active'),
			$(".jh").removeClass('active'),
			$(".sh").removeClass('active'),
			$('input[type=checkbox]').prop('checked', false);
		$(".hp_total").find("span").text(''); // find the span defined by "hp_total" class and display the added values in that span //
		$(".jh_total").find("span").text('');
		$(".sh_total").find("span").text('');


	});

});