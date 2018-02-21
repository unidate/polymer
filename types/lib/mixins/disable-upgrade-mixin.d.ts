/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/mixins/disable-upgrade-mixin.html
 */

declare namespace Polymer {


  /**
   * Element class mixin that allows the element to boot up in a non-enabled
   * state when the `disable-upgrade` attribute is present. This mixin is
   * designed to be used with element classes like Polymer.Element that perform
   * initial startup work when they are first connected. When the
   * `disable-upgrade` attribute is removed, if the element is connected, it
   * boots up and "enables" as it otherwise would; if it is not connected, the
   * element boots up when it is next connected.
   *
   * Using `disable-upgrade` with Polymer.Element prevents any data propagation
   * to the element, any element DOM from stamping, or any work done in
   * connected/disconnctedCallback from occuring, but it does not prevent work
   * done in the element constructor.
   *
   * Note, this mixin must be applied on top of any element class that
   * itself implements a `connectedCallback` so that it can control the work
   * done in `connectedCallback`. For example,
   *
   *     MyClass = Polymer.DisableUpgradeMixin(class extends BaseClass {...});
   */
  function DisableUpgradeMixin<T extends new (...args: any[]) => {}>(base: T): T & DisableUpgradeMixinConstructor;

  interface DisableUpgradeMixinConstructor {
    new(...args: any[]): DisableUpgradeMixin;
  }

  interface DisableUpgradeMixin {
    attributeChangedCallback(name: any, old: any, value: any): void;

    /**
     * NOTE: cannot gate on attribute because this is called before
     *         attributes are delivered. Therefore, we stub this out and
     *         call `super._initializeProperties()` manually.
     */
    _initializeProperties(): void;

    /**
     * prevent user code in connected from running
     */
    connectedCallback(): void;

    /**
     * prevent element from turning on properties
     */
    _enableProperties(): void;

    /**
     * only go if "enabled"
     */
    disconnectedCallback(): void;
  }
}
