(function() {var implementors = {};
implementors["xcm_primitives"] = [{"text":"impl&lt;AssetId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;AssetType&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, AssetType:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MultiLocation&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, AssetIdInfoGetter:&nbsp;<a class=\"trait\" href=\"xcm_primitives/trait.UnitsToWeightRatio.html\" title=\"trait xcm_primitives::UnitsToWeightRatio\">UnitsToWeightRatio</a>&lt;AssetId&gt;, R:&nbsp;TakeRevenue&gt; WeightTrader for <a class=\"struct\" href=\"xcm_primitives/struct.FirstAssetTrader.html\" title=\"struct xcm_primitives::FirstAssetTrader\">FirstAssetTrader</a>&lt;AssetId, AssetType, AssetIdInfoGetter, R&gt;","synthetic":false,"types":["xcm_primitives::FirstAssetTrader"]},{"text":"impl&lt;NativeTrader:&nbsp;WeightTrader, OtherTrader:&nbsp;WeightTrader&gt; WeightTrader for <a class=\"struct\" href=\"xcm_primitives/struct.MultiWeightTraders.html\" title=\"struct xcm_primitives::MultiWeightTraders\">MultiWeightTraders</a>&lt;NativeTrader, OtherTrader&gt;","synthetic":false,"types":["xcm_primitives::MultiWeightTraders"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()